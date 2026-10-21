import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";
import CnLinksObject from "../components/common/cnLinksObject";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="cn-page">
				<CnTopbar active="contact" />

				<main className="cn-wrap" id="content">
					<section className="cn-hero cn-hero-lite">
						<div className="cn-contact-grid">
							<div>
								<div className="cn-eyebrow-row cn-reveal cn-r1">
									<span className="cn-eyebrow">
										CONTACT.md
									</span>
								</div>
								<h1 className="cn-headline cn-reveal cn-r2">
									Write to me
								</h1>
								<p className="cn-lede cn-reveal cn-r3">
									Email is the direct line. I reply within a
									day, and longer when a release is in
									flight.{" "}
									<a
										href={`mailto:${INFO.main.email}`}
										className="cn-contact-email-link"
									>
										{INFO.main.email}
									</a>
								</p>
							</div>

							<div className="cn-hero-side cn-reveal cn-r4">
								<CnLinksObject />
							</div>
						</div>
					</section>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default Contact;
