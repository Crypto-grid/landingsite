import {
	faTwitter,
	faMedium,
	faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = () => {
	return (
		<div className="footer flex flex-row">
			<a href="" target="_blank">
				<FontAwesomeIcon icon={faTwitter} size="2x" />
			</a>
			<a href="" target="_blank">
				<FontAwesomeIcon icon={faMedium} size="2x" />
			</a>
			<a href="" target="_blank">
				<FontAwesomeIcon icon={faDiscord} size="2x" />
			</a>
		</div>
	);
}

export default FooterComponent;
