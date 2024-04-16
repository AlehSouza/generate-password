import { useCallback, useState } from 'react';
import './style.css'

const GeneratePassword = () => {

    const [textToast, setTextToast] = useState('Bem vindo 😃');
    const [toasted, setToasted] = useState(false)

    const [password, setPassword] = useState('')
    const [range, setRange] = useState([12]);
    const [strength, setStrength] = useState(0)

    const [isUppercase, setUppercase] = useState(false)
    const [isLowercase, setLowercase] = useState(false)
    const [isNumbers, setNumbers] = useState(false)
    const [isSimbols, setSimbols] = useState(false)

    const lettersUppercaseList = [];
    for (let i = 65; i <= 90; i++) {
        lettersUppercaseList.push(String.fromCharCode(i));
    }

    const lettersLowercaseList = [];
    for (let i = 97; i <= 122; i++) {
        lettersLowercaseList.push(String.fromCharCode(i));
    }

    const numbersList = [];
    for (let i = 0; i <= 9; i++) {
        numbersList.push(i);
    }

    const simbolsList = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '_', '+', '=', '-', '<', '>', ';', '^', '~', '[', ']', '/', '?', '\\', '|'];

    function setValue(event) {
        setRange(event.target.value);
    }

    function generate() {
        let finalPass = ''

        const optionsCaracters = []

        if (isUppercase) {
            optionsCaracters.push(lettersUppercaseList)
        }
        if (isLowercase) {
            optionsCaracters.push(lettersLowercaseList)
        }
        if (isSimbols) {
            optionsCaracters.push(simbolsList)
        }
        if (isNumbers) {
            optionsCaracters.push(numbersList)
        }
        if (!isUppercase && !isLowercase && !isSimbols && !isNumbers) {
            setTextToast('Selecione ao menos uma das opções para continuar 😟')
            setToasted(!toasted)
            return
        }

        for (let i = 0; i < range; i++) {
            const arrayRandom = Math.floor(Math.random() * optionsCaracters.length);
            const indexRandom = Math.floor(Math.random() * (optionsCaracters[arrayRandom].length));
            finalPass = finalPass + optionsCaracters[arrayRandom][indexRandom]
        }

        if (range === 8) {
            console.log('streng 1')
            setStrength(1)
        }
        else if (range <= 10) {
            setStrength(2)
        }
        else if (range <= 14) {
            setStrength(3)
        }
        else if (range <= 16) {
            setStrength(4)
        }

        setPassword(finalPass)
    }

    const CopyToClipboardButton = ({ text }) => {

        const copyToClipboard = () => {
            navigator.clipboard.writeText(text)
                .then(() => {
                    setTextToast('O texto foi copiado para sua área de transferência 😁')
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        };

        return (
            <button onClick={copyToClipboard}>
                <span className="material-symbols-outlined">
                    file_copy
                </span>
            </button>
        );
    };


    const ToastMessage = useCallback(() => {
        return (
            <div className='toast'>
                <label>
                    {textToast}
                </label>
            </div>
        )
    }, [textToast, toasted])

    const StrengElements = useCallback(() => {
        if (strength === 0) {
            <div className="strength">
                <div className="bar_power_fill"></div>
                <div className="bar_power_fill"></div>
                <div className="bar_power_fill"></div>
                <div className="bar_power_fill"></div>
            </div>
        }
        else if (strength === 1) {
            return (
                <div className="strength">
                    <div className="bar_power_full"></div>
                    <div className="bar_power_fill"></div>
                    <div className="bar_power_fill"></div>
                    <div className="bar_power_fill"></div>
                </div>
            )
        } else if (strength === 2) {
            return (
                <div className="strength">
                    <div className="bar_power_full"></div>
                    <div className="bar_power_full"></div>
                    <div className="bar_power_fill"></div>
                    <div className="bar_power_fill"></div>
                </div>
            )
        } else if (strength === 3) {
            return (
                <div className="strength">
                    <div className="bar_power_full"></div>
                    <div className="bar_power_full"></div>
                    <div className="bar_power_full"></div>
                    <div className="bar_power_fill"></div>
                </div>
            )
        } else if (strength === 4) {
            return (
                <div className="strength">
                    <div className="bar_power_full"></div>
                    <div className="bar_power_full"></div>
                    <div className="bar_power_full"></div>
                    <div className="bar_power_full"></div>
                </div>
            )
        } else {

        }
    }, [strength])

    return (
        <div className="generatePass_container">
            <ToastMessage />
            <a className='github' target='_blank' href='https://github.com/AlehSouza' rel="noreferrer">
                https://github.com/AlehSouza
            </a>
            <h3>Password Generator</h3>

            {/* Result password */}
            <div className="generatePass_result">
                <input type={'text'} placeholder='$3Nh4F0rT3' disabled value={password} />
                <CopyToClipboardButton text={password} />
            </div>

            <div className="generatePass_options">
                {/* Range password */}
                <div className="generatePass_length">
                    <div className="generatePass_length_header">
                        <label>Comprimento da senha</label>
                        <input
                            type="text"
                            value={range}
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
                        <input id="uppercase" type="checkbox" onChange={() => setUppercase(!isUppercase)} />
                        <label htmlFor="uppercase" >Incluir Letras Maiúsculas</label>
                    </div>
                    <div className="checkbox_option">
                        <input id="lowercase" type="checkbox" onChange={() => setLowercase(!isLowercase)} />
                        <label htmlFor="lowercase" >Incluir Letras Minúsculas</label>
                    </div>
                    <div className="checkbox_option">
                        <input id="numbers" type="checkbox" onChange={() => setNumbers(!isNumbers)} />
                        <label htmlFor="numbers" >Incluir Números</label>
                    </div>
                    <div className="checkbox_option">
                        <input id="symbols" type="checkbox" onChange={() => setSimbols(!isSimbols)} />
                        <label htmlFor="symbols" >Incluir Símbolos</label>
                    </div>
                </div>

                {/* Strength Password */}
                <div className="generatePass_strength">
                    <label> FORÇA DA SENHA </label>
                    <StrengElements />
                </div>

                {/* Button Generate -> */}
                <div className="generatePass_button">
                    <button onClick={() => generate()}>
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