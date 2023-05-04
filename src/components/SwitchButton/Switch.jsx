export default SwitchButton
import { SwitchLabel, Input, Slider} from "./style/Switch"
import './style/Switch.css'


function SwitchButton() {
    function changeOpacity(event) {
        const checkbox = event.currentTarget.querySelector(".input");
        const label = event.currentTarget.querySelector(".arquivar");

        if (checkbox.checked) {
          label.style.opacity = 0;
        } else {
          label.style.opacity = 1;
        }
      }
    return (
        <>
        <SwitchLabel className="label" onClick={changeOpacity}>
            <span className="arquivar">Arquivar</span>
            <Input className="input" type="checkbox" />
            <Slider className="slider" />
        </SwitchLabel>
    </>
    )
}


