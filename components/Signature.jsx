// import signature from "../assets/signature_black_vector.png"; not currently in use
import signature2 from "../assets/signature_black_vector2.png";
import Typewriter from 'typewriter-effect';


const Signature = () => {
    return (
        <div className="signatureContainer">
            <img src={signature2} className="signature"/>
            <h2 className="typewriter">
                <Typewriter
                    options={{
                        strings: [
                        'FullStack JavaScript Developer...',
                        'Looking for new opportunities...',
                        'React.js enthusiast...',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 25,
                    }}
                />
            </h2>
        </div>
    );
};

export default Signature;