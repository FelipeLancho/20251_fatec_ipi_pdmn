import React, { useState } from 'react';
import Busca from './components/Busca';
import Exibicao from './components/Exibicao';
import 'primeflex/primeflex.css';

const App = () => {
    const [resultado, setResultado] = useState([]);
    const [opcao, setOpcao] = useState(null);

    return (
        <div className="min-h-screen surface-ground p-4">
            <div className="grid justify-content-center">
                <div className="col-12 md:col-8 lg:col-6">
                    <Busca
                        onResultadoRecebido={setResultado}
                        onOpcaoAlterada={setOpcao}
                    />
                    <Exibicao previsoes={resultado} opcao={opcao} />
                </div>
            </div>
        </div>
    );
};

export default App;
