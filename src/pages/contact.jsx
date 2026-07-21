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

				<main className="cn-wrap">
					<section className="cn-hero cn-hero-lite">
						<div className="cn-contact-grid">
							<div>
								<div className="cn-eyebrow-row cn-reveal cn-r1">
									<span className="cn-eyebrow">
										CONTACT.md
									</span>
								</div>
								<h1 className="cn-headline cn-reveal cn-r2">
									Let's get in touch
								</h1>
								<p className="cn-lede cn-reveal cn-r3">
									Thank you for your interest in getting in
									touch with me. I welcome your feedback,
									questions, and suggestions — feel free to
									email me directly at{" "}
									<a
										href={`mailto:${INFO.main.email}`}
										className="cn-contact-email-link"
									>
										{INFO.main.email}
									</a>
									. I make an effort to respond to all
									messages within 24 hours, although it may
									take me longer during busy periods.
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
