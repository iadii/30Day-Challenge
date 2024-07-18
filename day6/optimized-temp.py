import os
import shutil
import fitz  # PyMuPDF
import re

def process_pdf(source_pdf, dest_dir, root_folder_name):
    # Create destination subfolder
    num = len([d for d in os.listdir(dest_dir) if d.lower().startswith("ch")]) + 1
    dest_subfolder = os.path.join(dest_dir, f"ch{num}")
    os.makedirs(dest_subfolder, exist_ok=True)

    # Copy PDF to destination
    dest_pdf_path = os.path.join(dest_subfolder, f"{root_folder_name}.pdf")
    shutil.copy2(source_pdf, dest_pdf_path)

    # Process PDF
    doc = fitz.open(dest_pdf_path)
    images_folder = os.path.join(dest_subfolder, "images")
    os.makedirs(images_folder, exist_ok=True)

    margins = {'top': 45.9, 'right': 45.9, 'bottom': 45.9, 'left': 45.9}
    for page_num, page in enumerate(doc, start=1):
        rect = page.rect
        new_rect = fitz.Rect(
            rect.x0 + margins['left'],
            rect.y0 + margins['top'],
            rect.x1 - margins['right'],
            rect.y1 - margins['bottom']
        )
        pix = page.get_pixmap(clip=new_rect, dpi=150)
        pix.save(os.path.join(images_folder, f"image_{page_num:03d}.jpg"))

    doc.close()
    
    return dest_subfolder, page_num

def update_html_file(html_path, image_count):
    with open(html_path, 'r+', encoding='utf-8') as f:
        content = f.read()
        new_content = re.sub(r"var\s+MAX\s*=\s*\d+[ \t]*;?", f"var MAX = {image_count};", content)
        f.seek(0)
        f.write(new_content)
        f.truncate()

def main():
    source_dir = input("Enter the source directory path: ")
    dest_dir = input("Enter the destination directory path: ")
    root_folder_name = os.path.basename(os.path.normpath(dest_dir))

    # Clean destination directory
    for item in os.listdir(dest_dir):
        if item.lower().endswith('.pdf'):
            os.remove(os.path.join(dest_dir, item))

    pdf_files = sorted(
        [f for f in os.listdir(source_dir) if f.lower().endswith(".pdf")],
        key=lambda x: [int(c) if c.isdigit() else c.lower() for c in re.split(r'(\d+)', x)]
    )

    for pdf in pdf_files:
        source_pdf = os.path.join(source_dir, pdf)
        folder, image_count = process_pdf(source_pdf, dest_dir, root_folder_name)
        
        # Update HTML file
        for file in os.listdir(folder):
            if file.lower().endswith(".html"):
                html_path = os.path.join(folder, file)
                update_html_file(html_path, image_count)

    print("Processing complete.")

if __name__ == "__main__":
    main()