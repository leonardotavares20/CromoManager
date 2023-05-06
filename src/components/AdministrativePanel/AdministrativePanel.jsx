import React, { useState } from 'react';
import {
  PainelAdministrativo,
  PainelMenu,
  PainelListaMenu,
  PainelConteudo,
  PainelListaConteudo,
  SpanSeta,
  Ul,
  Li
} from './style/AdministrativePanel';
import './style/AdministrativePanel.css';

function AdministrativePanel() {
  const [panels, setPanels] = useState({
    banner: false,
    institucional: false,
    empreendimentos: false,
  });

  const togglePanel = (panelName) => {
    setPanels(prevState => ({
      ...prevState,
      [panelName]: !prevState[panelName]
    }));
  };

  return (
    <PainelAdministrativo>
      <div>
        <PainelMenu>Painel</PainelMenu>
        <PainelListaMenu>Perfil</PainelListaMenu>
        <PainelListaMenu>Serviços</PainelListaMenu>
        <PainelListaMenu>Suporte</PainelListaMenu>
        <PainelListaMenu>Configurações</PainelListaMenu>
      </div>
      <div>
        <PainelConteudo>Conteudo</PainelConteudo>
        <ul>
          <PainelListaConteudo className="accordion">
            <li>
              Banner
              <SpanSeta className={panels.banner ? "active" : ""} onClick={() => togglePanel("banner")} >
                <i className="material-icons">
                    {panels.banner ? "arrow_drop_down" : "arrow_right"}
                </i>
              </SpanSeta>
              <Ul className={`panel ${panels.banner ? "active" : ""}`}>
                <Li>Listar</Li>
                <Li>Cadastrar</Li>
              </Ul>
            </li>
          </PainelListaConteudo>
          <PainelListaConteudo className="accordion">
            <li>
              Institucional
              <SpanSeta className={panels.institucional ? "active" : ""} onClick={() => togglePanel("institucional")} >
                <i className="material-icons">
                    {panels.institucional ? "arrow_drop_down" : "arrow_right"}
                </i>
              </SpanSeta>
              <Ul className={`panel ${panels.institucional ? "active" : ""}`}>
                <Li>Cadastrar</Li>
              </Ul>
            </li>
          </PainelListaConteudo>
          <PainelListaConteudo className="accordion">
            <li>
              Empreendimentos
              <SpanSeta className={panels.empreendimentos ? "active" : ""} onClick={() => togglePanel("empreendimentos")} >
                <i className="material-icons">
                    {panels.empreendimentos ? "arrow_drop_down" : "arrow_right"}
                </i>
              </SpanSeta>
              <Ul className={`panel ${panels.empreendimentos ? "active" : ""}`}>
                <Li>Ola</Li>
              </Ul>
            </li>
          </PainelListaConteudo>
        </ul>
      </div>
    </PainelAdministrativo>
  );
}

export default AdministrativePanel;