"use client";

import { useRef, useState } from "react";

export function FileDropzone({
  onFilesChange,
}: {
  onFilesChange?: (files: File[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(newFiles: FileList | null) {
    if (!newFiles || newFiles.length === 0) return;
    const next = [...files, ...Array.from(newFiles)];
    setFiles(next);
    onFilesChange?.(next);
    // input의 value를 안 비우면, 삭제 후 같은 파일을 다시 선택했을 때
    // 브라우저가 "값이 안 바뀌었다"고 판단해 change 이벤트가 안 일어남
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange?.(next);
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`border-2 border-dashed p-12 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-primary bg-surface-container"
            : "border-outline-variant bg-surface-container-lowest hover:border-primary"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-[32px] text-secondary mb-2 block">
            upload_file
          </span>
          <span className="font-body-md text-body-md text-secondary">
            클릭하여 파일을 업로드하거나 드래그 앤 드롭 하세요.
          </span>
          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {files.map((file, i) => (
            <div
              key={`${file.name}-${i}`}
              className="flex items-center gap-3 bg-surface border border-outline-variant px-4 py-2 text-sm"
            >
              <span className="material-symbols-outlined text-primary text-lg">
                description
              </span>
              <span className="font-technical-data font-medium">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="text-error hover:opacity-70 transition-opacity"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
