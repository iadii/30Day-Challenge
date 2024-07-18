import os
import shutil
import fitz  # PyMuPDF
import re
from concurrent.futures import ThreadPoolExecutor

def delete_old_pdfs(destination_dir):
    with os.scandir(destination_dir) as it:
        for entry in it:
            if entry.is_file() and entry.name.lower().endswith(".pdf"):
                os.remove(entry.path)

def update_html_files(destination_dir):
    for root, dirs, files in os.walk(destination_dir):
        for dir_name in dirs:
            if dir_name.lower().startswith("ch"):
                folder_path = os.path.join(root, dir_name)
                with os.scandir(folder_path) as it:
                    for entry in it:
                        if entry.is_file() and entry.name.lower().endswith(".html"):
                            html_file_path = entry.path
                            with open(html_file_path, 'r', encoding='utf-8') as f:
                                fileTxt = f.read()
                            images_folder = os.path.join(folder_path, "images")
                            if os.path.exists(images_folder):
                                images = len([img for img in os.listdir(images_folder) if img.lower().endswith(".jpg")])
                                fileTxt = re.sub(r"var\s+MAX\s*=\s*\d+[ \t]*;?", f"var MAX = {images};", fileTxt)
                                with open(html_file_path, 'w', encoding='utf-8') as f:
                                    f.write(fileTxt)
                                print(f"Updated {html_file_path} with MAX = {images}")

def process_pdf(source_pdf_path, destination_pdf_path):
    shutil.copy2(source_pdf_path, destination_pdf_path)
    print(f"Copied and renamed {source_pdf_path} to {destination_pdf_path}")
    crop_and_convert_to_jpeg(destination_pdf_path)

def crop_and_convert_to_jpeg(file_path):
    try:
        doc = fitz.open(file_path)
        file_name = os.path.basename(file_path)
        folder_path = os.path.dirname(file_path)
        temp_cropped_path = os.path.join(folder_path, f"temp_{file_name}")
        output_cropped_path = os.path.join(folder_path, file_name)
        output_image_folder = os.path.join(folder_path, "images")
        os.makedirs(output_image_folder, exist_ok=True)
        for filename in os.listdir(output_image_folder):
            file_path = os.path.join(output_image_folder, filename)
            if os.path.isfile(file_path):
                os.unlink(file_path)
        margins = {'top': 45.9, 'right': 45.9, 'bottom': 45.9, 'left': 45.9}
        for page in doc:
            rect = page.rect
            new_rect = fitz.Rect(
                rect.x0 + margins['left'],
                rect.y0 + margins['top'],
                rect.x1 - margins['right'],
                rect.y1 - margins['bottom']
            )
            page.set_cropbox(new_rect)
        doc.save(temp_cropped_path)
        doc.close()
        os.remove(output_cropped_path)
        os.rename(temp_cropped_path, output_cropped_path)
        cropped_doc = fitz.open(output_cropped_path)
        for i, page in enumerate(cropped_doc, start=1):
            num = "{0:03}".format(i)
            pix = page.get_pixmap(dpi=150)
            image_path = os.path.join(output_image_folder, f"image_{num}.jpg")
            pix.save(image_path)
            print(f"Page {num} saved as {image_path}")
        cropped_doc.close()
        print(f"All pages of {file_name} cropped and converted to JPEG successfully!")
    except Exception as e:
        print(f"Error occurred while processing {file_path}: {e}")

def numerical_sort(value):
    parts = re.split(r'(\d+)', value)
    return [int(part) if part.isdigit() else part for part in parts]

def copy_and_rename_pdfs(source_dir, destination_dir):
    root_folder_name = os.path.basename(os.path.normpath(destination_dir))
    delete_old_pdfs(destination_dir)
    pdf_files = [file for file in os.listdir(source_dir) if file.lower().endswith(".pdf")]
    pdf_files.sort(key=numerical_sort)
    with ThreadPoolExecutor() as executor:
        for num, pdf_filename in enumerate(pdf_files, start=1):
            source_pdf_path = os.path.join(source_dir, pdf_filename)
            dest_subfolder = os.path.join(destination_dir, f"ch{num}")
            os.makedirs(dest_subfolder, exist_ok=True)
            new_filename = f"{root_folder_name}.pdf"
            destination_pdf_path = os.path.join(dest_subfolder, new_filename)
            executor.submit(process_pdf, source_pdf_path, destination_pdf_path)
    update_html_files(destination_dir)

source_dir = input("Enter the source directory path: ")
destination_dir = input("Enter the destination directory path: ")

copy_and_rename_pdfs(source_dir, destination_dir)
