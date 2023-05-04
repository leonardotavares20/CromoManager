export default SwitchButton
import { SwitchLabel, Input, Slider} from "./style/Switch"
import './style/Switch.css'

function SwitchButton() {
    return (
        <>
        <SwitchLabel className="label">
            <Input className='input' type='checkbox'></Input>
            <Slider className='slider'></Slider>
        </SwitchLabel>
        </>
    )
}