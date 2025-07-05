import React from 'react';
import { Card } from 'primereact/card';
import striptags from 'striptags';

const Exibicao = ({ previsoes, opcao }) => {
    if (!previsoes || previsoes.length === 0 || !opcao) return null;

    return (
        <div className="grid">
            {previsoes.map((item, idx) => {
                const tempMin = striptags(item.temp_min?.toString() || '');
                const tempMax = striptags(item.temp_max?.toString() || '');
                const humidity = striptags(item.humidity?.toString() || '');

                return (
                    <div key={idx} className="col-12 sm:col-6 md:col-4">
                        <Card title={`Dia ${idx + 1}`} className="mb-3">
                            {opcao === 'temperatura' ? (
                                <p>
                                    Mín: <strong>{tempMin}°C</strong><br />
                                    Máx: <strong>{tempMax}°C</strong>
                                </p>
                            ) : (
                                <p>
                                    Pressão: <strong>(indisponível)</strong><br />
                                    Umidade: <strong>{humidity}%</strong>
                                </p>
                            )}
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default Exibicao;
