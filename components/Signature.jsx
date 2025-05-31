import signature from "../assets/signature_black_vector.png"


const Signature = () => {
    return (
        <div className="signatureContainer">
            <img src={signature} className="signature"/>
            <h2>Junior FullStack JavaScript Developer</h2>
        </div>
    );
};

export default Signature;