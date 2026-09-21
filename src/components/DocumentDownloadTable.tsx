'use client';

import React from 'react';
import { FileText, ShieldCheck, ArrowDownToLine } from 'lucide-react';

interface DocumentItem {
  id: string;
  title: string;
  description: string;
  officialRef?: string;
  fileSize?: string;
  filename: string;
  date?: string;
}

interface DocumentDownloadTableProps {
  documents: DocumentItem[];
  lang?: 'ca' | 'es';
}

export default function DocumentDownloadTable({ documents, lang = 'ca' }: DocumentDownloadTableProps) {
  const downloadText = lang === 'ca' ? 'Descarregar PDF' : 'Descargar PDF';

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {doc.title}
                </h3>
                {doc.officialRef && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {doc.officialRef}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {doc.description}
              </p>
              {doc.date && (
                <div className="text-xs text-slate-400 font-medium">
                  {lang === 'ca' ? 'Actualitzat / Tancat:' : 'Actualizado / Cerrado:'} {doc.date}
                </div>
              )}
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 self-end md:self-center">
            <a
              href={`/docs/${doc.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group/btn"
            >
              <ArrowDownToLine className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              <span>{downloadText}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
