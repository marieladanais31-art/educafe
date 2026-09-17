'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

interface VolunteerFormProps {
  lang?: 'ca' | 'es';
}

export default function VolunteerForm({ lang = 'ca' }: VolunteerFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    municipality: '',
    area: 'mentoria',
    availability: 'tardes',
    lopiviConsent: false,
    privacyConsent: false,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lopiviConsent || !formData.privacyConsent) {
      alert(lang === 'ca' ? 'Cal acceptar els requisits legals i de privacitat.' : 'Es necesario aceptar los requisitos legales y de privacidad.');
      return;
    }
    setSubmitted(true);
  };

  const isCa = lang === 'ca';

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          {isCa ? 'Sol·licitud de Voluntariat Rebuda!' : '¡Solicitud de Voluntariado Recibida!'}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          {isCa
            ? 'Moltes gràcies pel teu compromís i solidaritat. El nostre equip de coordinació socioeducativa es posarà en contacte amb tu en breu per concertar una trobada informativa.'
            : 'Muchas gracias por tu compromiso y solidaridad. Nuestro equipo de coordinación socioeducativa se pondrá en contacto contigo en breve para concertar una reunión informativa.'}
        </p>
        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-emerald-700 underline hover:text-emerald-900"
          >
            {isCa ? 'Enviar una altra sol·licitud' : 'Enviar otra solicitud'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-6">
      <div className="space-y-1 border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-teal-600" />
          <span>{isCa ? 'Formulari d’Inscripció al Voluntariat' : 'Formulario de Inscripción al Voluntariado'}</span>
        </h3>
        <p className="text-xs text-slate-500">
          {isCa
            ? 'Completa les teves dades i ens posarem en contacte amb tu per acompanyar-te en el procés d’incorporació.'
            : 'Completa tus datos y nos pondremos en contacto contigo para acompañarte en el proceso de incorporación.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {isCa ? 'Nom i Cognoms *' : 'Nombre y Apellidos *'}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={isCa ? 'Ex: Maria Garcia Vidal' : 'Ej: María García Vidal'}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {isCa ? 'Correu Electrònic *' : 'Correo Electrónico *'}
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="nom@exemple.org"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {isCa ? 'Telèfon de Contacte *' : 'Teléfono de Contacto *'}
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="600 000 000"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {isCa ? 'Municipi de Residència' : 'Municipio de Residencia'}
          </label>
          <input
            type="text"
            value={formData.municipality}
            onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
            placeholder={isCa ? 'Ex: Mont-roig del Camp, Cambrils, Reus...' : 'Ej: Mont-roig del Camp, Cambrils, Reus...'}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {isCa ? 'Àmbit d’Interès Principal *' : 'Área de Interés Principal *'}
          </label>
          <select
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          >
            <option value="mentoria">{isCa ? 'Mentoria i Reforç Escolar (Projecte Brúixola)' : 'Mentoría y Apoyo al Estudio (Proyecto Brúixola)'}</option>
            <option value="digital">{isCa ? 'Tallers de Competència Digital i IA Ètica' : 'Talleres de Competencia Digital e IA Responsable'}</option>
            <option value="familia">{isCa ? 'Suport Familiar i Comunitari' : 'Apoyo Familiar y Comunitario'}</option>
            <option value="aps">{isCa ? 'Activitats d’Aprenentatge-Servei (ApS)' : 'Actividades de Aprendizaje-Servicio (ApS)'}</option>
            <option value="altres">{isCa ? 'Suport Logístic i d’Esdeveniments' : 'Apoyo Logístico y de Eventos'}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            {isCa ? 'Disponibilitat Horària' : 'Disponibilidad Horaria'}
          </label>
          <select
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
          >
            <option value="tardes">{isCa ? 'Tardes entre setmana (de 17h a 19h)' : 'Tardes entre semana (de 17h a 19h)'}</option>
            <option value="matins">{isCa ? 'Matins puntuals' : 'Mañanas puntuales'}</option>
            <option value="capsdesetmana">{isCa ? 'Caps de setmana / Sortides comunitàries' : 'Fines de semana / Salidas comunitarias'}</option>
            <option value="flexible">{isCa ? 'Flexible / A coordinar' : 'Flexible / A coordinar'}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          {isCa ? 'Comentaris o experiència prèvia (opcional)' : 'Comentarios o experiencia previa (opcional)'}
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={isCa ? 'Explica’ns breument la teva motivació o formació...' : 'Cuéntanos brevemente tu motivación o formación...'}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50"
        />
      </div>

      <div className="space-y-3 pt-2 border-t border-slate-100 text-xs text-slate-600">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.lopiviConsent}
            onChange={(e) => setFormData({ ...formData, lopiviConsent: e.target.checked })}
            className="mt-0.5 rounded text-teal-600 focus:ring-teal-500"
          />
          <span>
            {isCa
              ? 'Accepto el compromís d’Entorn Segur (LOPIVI) i entenc que caldrà aportar el Certificat Negatiu de Delictes Sexuals abans de participar amb menors.'
              : 'Acepto el compromiso de Entorno Seguro (LOPIVI) y entiendo que se requerirá presentar el Certificado Negativo de Delitos Sexuales antes de participar con menores.'}
          </span>
        </label>

        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.privacyConsent}
            onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
            className="mt-0.5 rounded text-teal-600 focus:ring-teal-500"
          />
          <span>
            {isCa
              ? 'He llegit i accepto la Política de Privacitat per a la gestió de la meva sol·licitud de voluntariat.'
              : 'He leído y acepto la Política de Privacidad para la gestión de mi solicitud de voluntariado.'}
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
      >
        <Send className="w-4 h-4" />
        <span>{isCa ? 'Enviar Sol·licitud de Voluntariat' : 'Enviar Solicitud de Voluntariado'}</span>
      </button>
    </form>
  );
}
