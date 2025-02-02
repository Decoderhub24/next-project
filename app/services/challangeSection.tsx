import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Style from "../services/challangeSection.module.scss";

const ChallangeSection = () => {
    return (
        <div className={Style.containerCh}>
            <div className={Style.imageCh}>
                <div className={Style.text}>
                    <h1 className={Style.heading}>
                        Got A New <strong>Challange</strong> For Us?
                    </h1>
                    <p>Let &amp; s work together and create the next big thing</p>
                    <button className={Style.btnCh}>
                        Kick Start Your Project
                        <FontAwesomeIcon icon={faArrowRightLong} style={{ marginLeft: "4px", color: "#ffffff" }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChallangeSection;
