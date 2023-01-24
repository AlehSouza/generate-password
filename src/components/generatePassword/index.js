import { useState } from 'react';
import './style.css'

const GeneratePassword = () => {

    let [rangeVal, setRangeVal] = useState([12]);

    function justSimpleAlert () {
        alert('Em desenvolvimento');
    }

    function setValue (event) {
        setRangeVal( event.target.value);
    }

    return (
        <div className="generatePass_container">
            <h3>Password Generator</h3>

            {/* Result password */}
            <div className="generatePass_result">
                <input type={'text'} placeholder='$3Nh4F0rT3'/> 
                <button>
                    <span className="material-symbols-outlined">
                        file_copy
                    </span>
                </button>
            </div>
            
            <div className="generatePass_options">
                {/* Range password */}
                <div className="generatePass_length">
                    <div className="generatePass_length_header">
                        <label>Comprimento da senha</label>
                        <input 
                            type="text" 
                            value={rangeVal}
                            disabled
                        />
                    </div>
                    <input 
                        min="8" 
                        max="16" 
                        className="generatePass_mediator" type="range"
                        onChange={setValue}
                    />
                </div>

                {/* Checkbox Options */}
                <div>
                    <div className="checkbox_option">
                        <input id="uppercase" type="checkbox"/>
                        <label htmlFor="uppercase" >Incluir Letras Maiúsculas</label>
                    </div>
                    <div className="checkbox_option">
                        <input id="lowercase" type="checkbox"/>
                        <label htmlFor="lowercase" >Incluir Letras Minúsculas</label>
                    </div>
                    <div className="checkbox_option">
                        <input id="numbers" type="checkbox"/>
                        <label htmlFor="numbers" >Incluir Números</label>
                    </div>
                    <div className="checkbox_option">
                        <input id="symbols" type="checkbox"/>
                        <label htmlFor="symbols" >Incluir Símbolos</label>
                    </div>
                </div>

                {/* Strength Password */}
                <div className="generatePass_strength">
                    <label> FORÇA DA SENHA </label>
                    <div className="strength">
                        <div className="bar_power_fill"></div>
                        <div className="bar_power_fill"></div>
                        <div className="bar_power_fill"></div>
                        <div className="bar_power_fill"></div>
                    </div>
                </div>

                {/* Button Generate -> */}
                <div className="generatePass_button">
                    <button onClick={justSimpleAlert}>
                        GERAR
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default GeneratePassword;