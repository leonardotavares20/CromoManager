export default CardConfigutarion
import { SectionConfiguration,
         DivCabecalho,
         Form,
         DivEmail,
         DivInstagram,
         DivFacebook,
         LabelTitulo,
         Botoes,
         DivLogo,
         DivLogoFlex,
         InputLogo

} from "./style.jsx/CardConfigurationStyle"
import { InputAtivo } from "../Forms/style/Forms"
import { BotaoNormal, BotaoTransparente } from "../Buttons/Buttons"

function CardConfigutarion() {
    return (
        <>
        <SectionConfiguration>
            <DivCabecalho>Contato e redes sociais</DivCabecalho>
            <Form>
                <DivEmail>
                        <LabelTitulo>E-mail</LabelTitulo>
                        <InputAtivo placeholder="comerciarl@meudomio.com"></InputAtivo>
                </DivEmail>
                <DivInstagram>
                        <LabelTitulo>Instagram</LabelTitulo>
                        <InputAtivo placeholder="@perfi_instagram"></InputAtivo>
                </DivInstagram>
                <DivFacebook>
                        <LabelTitulo>Facebook</LabelTitulo>
                        <InputAtivo placeholder="@perfil_facebook"></InputAtivo>
                </DivFacebook>
                <DivLogo>
                        <LabelTitulo>Logo do site</LabelTitulo>
                        <DivLogoFlex>
                            <InputLogo placeholder="Fazer upload do computador"></InputLogo>
                            <BotaoTransparente>Anexar</BotaoTransparente>
                        </DivLogoFlex>
                </DivLogo>
                <Botoes>
                    <BotaoTransparente>Editar</BotaoTransparente>
                    <BotaoNormal>Salvar</BotaoNormal>
                </Botoes>
            </Form>
        </SectionConfiguration>
        </>
    )
}