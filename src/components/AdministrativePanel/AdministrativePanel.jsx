import React, { useState } from 'react';
import {
  PainelAdministrativo,
  PainelMenu,
  PainelListaMenu,
  PainelConteudo,
  PainelListaConteudo,
  SpanSeta,
  Ul,
  Li,
  LiNormal,
  RadioInput,
  DivNormal,
  UlNormal,
} from './style/AdministrativePanel';
export default AdministrativePanel

function AdministrativePanel() {

  // Funcão para o menu conteudo
  
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
      <DivNormal>
        <PainelMenu> Painel </PainelMenu>
        <PainelListaMenu> Perfil </PainelListaMenu>
        <PainelListaMenu> Serviços </PainelListaMenu>
        <PainelListaMenu> Suporte </PainelListaMenu>
        <PainelListaMenu> Configurações </PainelListaMenu>
      </DivNormal>
      <DivNormal>
        <PainelConteudo> Conteudo </PainelConteudo>
        <UlNormal>
          <PainelListaConteudo className="accordion">

            <LiNormal>
              Banner
              <SpanSeta //Botao dropdown
              className={panels.banner ? "active" : ""} 
              onClick={() => togglePanel("banner")} >
                <i className="material-icons">
                    {panels.banner ? "expand_more" : "chevron_right"}
                </i>
              </SpanSeta>

              <Ul className={`panel ${panels.banner ? "active" : ""}`}>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled>
                  </RadioInput> Listar Banner 
                </Li>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled>
                  </RadioInput> Cadastrar Banner 
                </Li>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled>
                  </RadioInput> Listar Categoria 
                </Li>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled>
                  </RadioInput> Cadastrar Categoria 
                </Li>
              </Ul>
            </LiNormal>

          </PainelListaConteudo>

          <PainelListaConteudo className="accordion">

            <LiNormal> 
              Institucional
              <SpanSeta  //Botao dropdown
                className={panels.institucional ? "active" : ""} 
                onClick={() => togglePanel("institucional")}>
                  <i className="material-icons">
                    {panels.institucional ? "expand_more" : "chevron_right"}
                  </i>
              </SpanSeta>

              <Ul className={`panel ${panels.institucional ? "active" : ""}`}>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled> 
                  </RadioInput> Sobre 
                </Li>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled> 
                  </RadioInput> Números 
                </Li>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled> 
                  </RadioInput> Controle de qualidade 
                </Li>
              </Ul>
            </LiNormal>

          </PainelListaConteudo>

          <PainelListaConteudo className="accordion">

            <LiNormal> 
              Empreendimentos
              <SpanSeta //Botao dropdown
                className={panels.empreendimentos ? "active" : ""} 
                onClick={() => togglePanel("empreendimentos")} >
                  <i className="material-icons">
                    {panels.empreendimentos ? "expand_more" : "chevron_right"}
                  </i>
              </SpanSeta>

              <Ul className={`panel ${panels.empreendimentos ? "active" : ""}`}>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled>
                  </RadioInput> Listar 
                </Li>
                <Li> 
                  <RadioInput 
                    type='radio' 
                    disabled>
                  </RadioInput> Cadastrar 
                </Li>
              </Ul>
            </LiNormal>

          </PainelListaConteudo>
        </UlNormal>
      </DivNormal>
    </PainelAdministrativo>
  );
}