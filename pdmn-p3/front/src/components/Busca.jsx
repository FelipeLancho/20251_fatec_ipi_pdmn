import React, { useState, useEffect, useRef } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import openweatherClient from '../utils/openweatherClient';

const Busca = ({ onResultadoRecebido, onOpcaoAlterada }) => {
    const [entrada, setEntrada] = useState('-23.561167625063238, -46.65648357473211');
    const [opcao, setOpcao] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const partes = entrada.split(',').map(p => p.trim());
        const entradaValida = partes.length === 2 && !isNaN(partes[0]) && !isNaN(partes[1]);

        if (entradaValida && opcao) {
            timeoutRef.current = setTimeout(() => {
                const [lat, lon] = partes;

                openweatherClient.get('/search', {
                    params: { lat, lon }
                })
                .then(res => {
                    if (Array.isArray(res.data)) {
                        onResultadoRecebido(res.data);
                    } else {
                        onResultadoRecebido([]);
                    }
                })
                .catch(err => {
                    console.error('Erro ao buscar latitude e longitude:', err);
                    onResultadoRecebido([]);
                });
            }, 5000);
        } else {
            onResultadoRecebido([]);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [entrada, opcao]);

    const handleOpcaoChange = (value) => {
        setOpcao(value);
        onOpcaoAlterada(value);
    };

    return (
        <div className="p-3">
            <input
                type="text"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
                placeholder="Digite latitude, longitude"
                className="p-inputtext p-component w-full mb-3"
            />

            <div className="flex flex-column gap-2 mb-4">
                <div className="flex align-items-center">
                    <RadioButton
                        inputId="temp"
                        name="opcao"
                        value="temperatura"
                        onChange={(e) => handleOpcaoChange(e.value)}
                        checked={opcao === 'temperatura'}
                    />
                    <label htmlFor="temp" className="ml-2">Temperatura mín. e máx.</label>
                </div>

                <div className="flex align-items-center">
                    <RadioButton
                        inputId="press"
                        name="opcao"
                        value="pressao_umidade"
                        onChange={(e) => handleOpcaoChange(e.value)}
                        checked={opcao === 'pressao_umidade'}
                    />
                    <label htmlFor="press" className="ml-2">Pressão e umidade</label>
                </div>
            </div>
        </div>
    );
};

export default Busca;


