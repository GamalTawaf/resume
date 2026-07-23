import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import CnTopbar from "../components/common/cnTopbar";
import CnFooter from "../components/common/cnFooter";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const VibeCoding = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "vibe-coding");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`AI Playbook | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="cn-page">
				<CnTopbar active="vibe-coding" />

				<main className="cn-wrap">
					<section className="cn-hero cn-hero-lite">
						<div className="cn-eyebrow-row cn-reveal cn-r1">
							<span className="cn-eyebrow">
								$ git log --grep=fix
							</span>
						</div>
						<h1 className="cn-headline cn-reveal cn-r2">
							AI-assisted engineering: what actually works
						</h1>
						<p className="cn-lede cn-reveal cn-r3">
							AI speeds up delivery, but it confidently repeats
							patterns without verifying them. These are the
							practices I use to get senior-quality output from an
							LLM in the loop — learned the hard way while
							building a multi-agent system.
						</p>
					</section>

					<section aria-labelledby="cn-lessons-head">
						<div className="cn-section-head">
							<span className="cn-eyebrow" id="cn-lessons-head">
								Lessons
							</span>
							<span className="cn-section-note">
								{INFO.vibeCodingLessons.length} learned
							</span>
						</div>

						<div className="cn-builds">
							{INFO.vibeCodingLessons.map((lesson) => (
								<div className="cn-build" key={lesson.title}>
									<div className="cn-build-head">
										<span className="cn-build-name">
											{lesson.title}
										</span>
									</div>
									<p className="cn-build-desc">
										{lesson.detail}
									</p>
								</div>
							))}
						</div>
					</section>
				</main>

				<CnFooter />
			</div>
		</React.Fragment>
	);
};

export default VibeCoding;
