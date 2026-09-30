import React from 'react';
import { Users, DollarSign, Calendar, FileText, ShieldCheck } from 'lucide-react';
import { Empleado } from '../types';

interface PersonnelViewProps {
  empleados: Empleado[];
}

export const PersonnelView: React.FC<PersonnelViewProps> = ({ empleados }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Personal, Asistencia & Liquidación de Sueldos</h2>
          <p className="text-xs text-slate-400">Control de legajos, horas normales/extras y adaptador ARCA / Libro de Sueldos Digital</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Adaptador ARCA / F.931 Listo
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" /> Liquidación Mensual Vigente (UOCRA / Choferes)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold">
                <tr>
                  <th className="p-3">Legajo</th>
                  <th className="p-3">Empleado</th>
                  <th className="p-3">Puesto</th>
                  <th className="p-3">Sueldo Básico</th>
                  <th className="p-3">Hrs Extra</th>
                  <th className="p-3">Total Bruto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {empleados.map((emp) => {
                  const bruto = emp.sueldoBasico * 1.25;
                  return (
                    <tr key={emp.id} className="hover:bg-slate-800/50">
                      <td className="p-3 font-mono font-bold text-amber-400">{emp.legajo}</td>
                      <td className="p-3 font-medium text-white">{emp.apellido}, {emp.nombre}</td>
                      <td className="p-3 capitalize">{emp.puesto.replace('_', ' ')}</td>
                      <td className="p-3">${emp.sueldoBasico.toLocaleString()}</td>
                      <td className="p-3 text-emerald-400 font-semibold">$185,000</td>
                      <td className="p-3 font-bold text-white">${bruto.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" /> Integración ARCA (LSD)
          </h3>
          <p className="text-xs text-slate-300">
            Exportación automática de conceptos remunerativos y no remunerativos formateados según requerimiento F.931.
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Período Fiscal:</span>
              <span className="font-bold text-white">09/2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Empleados:</span>
              <span className="font-bold text-white">{empleados.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Aportes & Contribuciones:</span>
              <span className="font-bold text-emerald-400">$4,820,000</span>
            </div>
          </div>
          <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs transition shadow-md flex items-center justify-center gap-2">
            <DollarSign className="w-4 h-4" /> Generar TXT Libro Sueldos Digital
          </button>
        </div>
      </div>
    </div>
  );
};
