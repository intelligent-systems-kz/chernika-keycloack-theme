import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import "./main.css";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr, currentLanguage, enabledLanguages } = i18n;

    const { realm, auth, url, message, isAppInitiatedAction } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className={kcClsx("kcLoginClass")}>
            <div id="kc-header" className={kcClsx("kcHeaderClass")}>
                <div id="kc-header-wrapper" className={kcClsx("kcHeaderWrapperClass")}>
                    {/* {msg("loginTitleHtml", realm.displayNameHtml)} */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150">
                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="3" dy="3" stdDeviation="2" flood-color="black" flood-opacity="0.5"/>
                            </filter>
                        </defs>
                        <g id="h-chernika-logo" fill="#032442"  filter="url(#shadow)">
                            <path d="M85.42 71.88c1.95,-1.95 1.93,-6.73 6.23,-7.11 0.87,-0.07 2.05,0.24 2.69,0.63 2.09,1.3 3.08,5.07 4.15,5.75 1.88,1.19 7.8,-1.83 10.11,2.54 1.97,3.75 -2.5,6.82 -3.35,9.3 0.71,2.2 4.25,4.69 2.38,8.01 -2.1,3.73 -7.72,2.01 -8.6,2.47 -1.63,1.77 -3.24,5.93 -5.94,6.15 -3.56,0.3 -4.25,-3.82 -6.13,-5.85 -3.94,-0.73 -6.53,1.4 -9.07,-1.99 -2.07,-2.75 0.95,-5.84 1.64,-7.86 -0.82,-2.76 -5.17,-4.7 -3.87,-8.84 0.52,-1.65 1.93,-2.6 3.56,-2.94 2.26,-0.46 4.04,-0.05 6.2,-0.26zm-38.93 25.05c0.39,6.37 2.78,13.28 5.32,17.83 3.25,5.81 2.95,4.73 5.92,8.67 0.71,0.94 0.46,0.57 1.44,1.33 1.35,1.04 0.44,1.03 2.78,2.79l6.66 4.81c7.41,4.85 19.33,6.78 28.26,6.1 9.52,-0.73 18.05,-3.99 24.89,-9.46l3.18 -2.71c1.16,-1.06 1.68,-1.78 2.72,-2.88 0.83,-0.88 0.73,-0.62 1.44,-1.65l3.46 -4.89c9.75,-15.63 8.14,-39.16 -3.64,-52.64l-4.22 -4.47c-5.08,-4.6 -8.9,-7.3 -15.92,-9.77 -5.65,-1.98 -13.55,-3.06 -19.95,-2.45 -17.44,1.66 -28.38,9.63 -35.91,21.5 -5.07,8.01 -7.04,18 -6.43,27.89z"/>
                            <path d="M40.06 9.07c0.41,7.33 3.75,13.05 7.42,18.33 4.81,6.95 13.31,12.45 21.96,14.6 4.94,1.23 14.49,2.27 19.58,1.22 -1.19,-6.11 -2.2,-11.33 -5.1,-15.73 -5.72,-8.7 -14.55,-14.5 -25.08,-17.03 -5.15,-1.23 -13.4,-2.61 -18.78,-1.39z"/>
                            <path d="M95.73 37.76l0.44 0.27c-0.41,1.61 -0.98,3.49 -0.69,5.08l8.5 -0.51 0.31 0.34c12.84,-0.83 25.47,-7.74 31.41,-19.61 1.7,-3.4 3.65,-9.08 3.56,-13.45 -2.92,-1.91 -12.34,0.12 -15.68,1.03 -5.04,1.37 -11.42,4.28 -15.13,7.46 -0.46,0.39 -0.8,0.55 -1.26,0.94 -5.22,4.41 -10.28,11.35 -11.46,18.45z"/>
                            <path d="M99.51 83.61c0.81,-4.24 -2.37,-7.27 -5.51,-7.97 -2.11,-0.47 -4.46,-0.13 -5.94,1.02 -1.14,0.88 -2.34,2.41 -2.62,4.19 -1.56,10.13 12.45,11.26 14.07,2.76z"/>
                            <path d="M104.29 42.94l-0.31 -0.34 -8.5 0.51c-0.29,-1.59 0.28,-3.47 0.69,-5.08l-0.44 -0.27 -1.08 5.9 9.64 -0.72z"/>
                            <path d="M194.05 107.74c-4.3,0 -8.07,-0.97 -11.28,-2.88 -3.24,-1.9 -5.73,-4.58 -7.52,-8.01 -1.79,-3.41 -2.68,-7.42 -2.68,-12l0 -0.92c0,-4.56 0.88,-8.56 2.64,-11.98 1.76,-3.43 4.23,-6.1 7.41,-8.01 3.18,-1.9 6.88,-2.86 11.09,-2.86 4.36,0 8.01,1.03 10.97,3.07 2.96,2.05 5.21,4.98 6.74,8.75l-7.99 3.52c-0.92,-2.29 -2.19,-4.04 -3.81,-5.23 -1.62,-1.18 -3.62,-1.77 -5.99,-1.77 -3.63,0 -6.5,1.26 -8.6,3.79 -2.11,2.53 -3.17,6.01 -3.17,10.42l0 1.59c0,4.31 1.12,7.75 3.34,10.32 2.2,2.57 5.16,3.86 8.85,3.86 2.43,0 4.51,-0.59 6.24,-1.77 1.73,-1.17 3.15,-2.96 4.27,-5.36l7.87 3.86c-1.15,2.46 -2.63,4.55 -4.44,6.28 -1.81,1.74 -3.89,3.06 -6.24,3.96 -2.34,0.91 -4.91,1.37 -7.7,1.37z"/>
                            <path d="M223.44 106.4l0 -61.21 9.29 0 0 23.14 0.3 0c3.46,-4.84 8.08,-7.25 13.86,-7.25 4.3,0 7.67,1.42 10.13,4.27 2.45,2.85 3.68,6.77 3.68,11.74l0 29.31 -9.29 0 0 -27.59c0,-6.48 -2.77,-9.73 -8.29,-9.73 -3.13,0 -5.64,1.08 -7.54,3.23 -1.9,2.15 -2.85,5 -2.85,8.55l0 25.54 -9.29 0z"/>
                            <path d="M292.98 107.78c-4.32,0 -8.11,-0.95 -11.34,-2.85 -3.24,-1.9 -5.74,-4.56 -7.51,-7.97 -1.77,-3.41 -2.67,-7.4 -2.67,-11.99l0 -1.38c0,-4.5 0.9,-8.44 2.67,-11.82 1.77,-3.39 4.25,-6.01 7.45,-7.89 3.2,-1.87 6.91,-2.8 11.15,-2.8 3.8,0 7.12,0.81 9.95,2.43 2.84,1.62 5.03,3.91 6.59,6.89 1.56,2.97 2.34,6.45 2.34,10.42 0,1.12 -0.04,2.18 -0.09,3.16 -0.09,0.99 -0.2,1.96 -0.37,2.88l-34.33 0 0 -6.54 25.92 0 0 0c0,-3.52 -0.9,-6.32 -2.7,-8.37 -1.8,-2.06 -4.25,-3.08 -7.35,-3.08 -3.71,0 -6.67,1.33 -8.88,3.99 -2.2,2.65 -3.3,6.3 -3.3,10.94l0 0.96c0,4.62 1.13,8.28 3.39,10.96 2.26,2.7 5.34,4.05 9.25,4.05 4.72,0 8.22,-2.18 10.51,-6.54l7.66 4.11c-1.79,3.41 -4.23,6.01 -7.33,7.77 -3.09,1.78 -6.76,2.67 -11.01,2.67z"/>
                            <path d="M331.33 103.17l0 -40.75 8 0 0 9.43 0.46 0c1.34,-3.47 3.23,-6.13 5.65,-7.99 2.43,-1.85 5.24,-2.78 8.42,-2.78 2.26,0 4.25,0.44 5.97,1.31 1.7,0.88 3.38,2.3 5,4.26l-6.2 7.17c-1.28,-1.51 -2.55,-2.58 -3.82,-3.21 -1.27,-0.63 -2.74,-0.94 -4.38,-0.94 -3.19,0 -5.67,1.22 -7.43,3.66 -1.79,2.45 -2.66,5.87 -2.66,10.26l0 19.58 -9.01 0zm-9.96 3.23l0 -7.26 33.2 0 0 7.26 -33.2 0zm0.84 -36.69l0 -7.29 13.39 0 0 7.29 -13.39 0z"/>
                            <path d="M374.16 106.4l0 -43.98 8.76 0 0 6.71 0.29 0c1.67,-2.6 3.73,-4.6 6.14,-5.99 2.4,-1.37 5.16,-2.06 8.26,-2.06 4.36,0 7.75,1.45 10.18,4.33 2.42,2.89 3.64,6.79 3.64,11.68l0 29.31 -9.3 0 0 -27.59c0,-3.16 -0.7,-5.58 -2.09,-7.24 -1.4,-1.66 -3.46,-2.49 -6.2,-2.49 -3.09,0 -5.61,1.07 -7.5,3.19 -1.92,2.12 -2.88,5.03 -2.88,8.72l0 25.41 -9.3 0z"/>
                            <path d="M439.98 103.63l-0.04 -41.21 9.08 0.04 0.05 41.13 -9.09 0.04zm-14.65 2.77l0 -7.3 37.59 0.04 0 7.26 -37.59 0zm0.84 -36.69l0 -7.29 20.8 0.04 0 7.25 -20.8 0zm17.16 -16.47c-1.92,0.02 -3.59,-0.65 -4.95,-2.02 -1.39,-1.37 -2.07,-3.02 -2.04,-4.94 0,-1.99 0.7,-3.64 2.08,-4.94 1.37,-1.3 3.01,-1.94 4.91,-1.94 2.01,0 3.67,0.64 4.98,1.94 1.32,1.3 1.97,2.97 1.97,4.98 0,1.9 -0.65,3.53 -1.97,4.9 -1.31,1.37 -2.97,2.04 -4.98,2.02z"/>
                            <path d="M502.2 106.4l-19.3 -23.56 0 -0.26 18.46 -20.16 11.3 0 -20.97 22.55 0 -4.73 21.9 26.16 -11.39 0zm-28.22 0l0 -61.21 9.29 0 0 61.21 -9.29 0z"/>
                            <path d="M538.92 107.78c-2.93,0 -5.53,-0.6 -7.79,-1.79 -2.26,-1.17 -4.02,-2.83 -5.29,-4.95 -1.29,-2.1 -1.91,-4.52 -1.91,-7.26l0 -0.59c0,-4.5 1.55,-8.09 4.63,-10.77 3.07,-2.69 7.17,-4.03 12.28,-4.03 2.26,0 4.37,0.25 6.35,0.73 1.97,0.5 3.73,1.17 5.29,2.04l0 6.37c-2.71,-1.73 -5.92,-2.6 -9.63,-2.6 -2.96,0 -5.27,0.69 -6.96,2.07 -1.69,1.38 -2.54,3.31 -2.54,5.77l0 0.5c0,2.3 0.72,4.08 2.17,5.37 1.46,1.29 3.44,1.93 5.95,1.93 2.04,0 3.81,-0.5 5.35,-1.54 1.52,-1.02 2.7,-2.44 3.57,-4.27 0.86,-1.82 1.3,-3.9 1.3,-6.22l0 -10.44c0,-2.97 -0.77,-5.27 -2.31,-6.91 -1.53,-1.63 -3.82,-2.44 -6.86,-2.44 -4.11,0 -7.76,1.59 -10.97,4.78l-5.32 -5.66c4.3,-4.53 9.91,-6.79 16.83,-6.79 5.67,0 10.03,1.48 13.09,4.44 3.04,2.96 4.58,7.04 4.58,12.24l0 28.64 -8.71 0 0 -6.12 -0.33 0c-1.29,2.34 -3,4.17 -5.17,5.5 -2.17,1.33 -4.7,2 -7.6,2z"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className={kcClsx("kcFormCardClass")}>
                <header className={kcClsx("kcFormHeaderClass")}>
                    {enabledLanguages.length > 1 && (
                        <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
                            <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
                                <div id="kc-locale-dropdown" className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}>
                                    <button
                                        tabIndex={1}
                                        id="kc-current-locale-link"
                                        aria-label={msgStr("languages")}
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-controls="language-switch1"
                                    >
                                        {currentLanguage.label}
                                    </button>
                                    <ul
                                        role="menu"
                                        tabIndex={-1}
                                        aria-labelledby="kc-current-locale-link"
                                        aria-activedescendant=""
                                        id="language-switch1"
                                        className={kcClsx("kcLocaleListClass")}
                                    >
                                        {enabledLanguages.map(({ languageTag, label, href }, i) => (
                                            <li key={languageTag} className={kcClsx("kcLocaleListItemClass")} role="none">
                                                <a role="menuitem" id={`language-${i + 1}`} className={kcClsx("kcLocaleItemClass")} href={href}>
                                                    {label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    {(() => {
                        const node = !(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                            <h1 id="kc-page-title">{headerNode}</h1>
                        ) : (
                            <div id="kc-username" className={kcClsx("kcFormGroupClass")}>
                                <label id="kc-attempted-username">{auth.attemptedUsername}</label>
                                <a id="reset-login" href={url.loginRestartFlowUrl} aria-label={msgStr("restartLoginTooltip")}>
                                    <div className="kc-login-tooltip">
                                        <i className={kcClsx("kcResetFlowIcon")}></i>
                                        <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                    </div>
                                </a>
                            </div>
                        );

                        if (displayRequiredFields) {
                            return (
                                <div className={kcClsx("kcContentWrapperClass")}>
                                    <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                        <span className="subtitle">
                                            <span className="required">*</span>
                                            {msg("requiredFields")}
                                        </span>
                                    </div>
                                    <div className="col-md-10">{node}</div>
                                </div>
                            );
                        }

                        return node;
                    })()}
                </header>
                <div id="kc-content">
                    <div id="kc-content-wrapper">
                        {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                        {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                            <div
                                className={clsx(
                                    `alert-${message.type}`,
                                    kcClsx("kcAlertClass"),
                                    `pf-m-${message?.type === "error" ? "danger" : message.type}`
                                )}
                            >
                                <div className="pf-c-alert__icon">
                                    {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                                    {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                                    {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                                    {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                                </div>
                                <span
                                    className={kcClsx("kcAlertTitleClass")}
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(message.summary)
                                    }}
                                />
                            </div>
                        )}
                        {children}
                        {auth !== undefined && auth.showTryAnotherWayLink && (
                            <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                <div className={kcClsx("kcFormGroupClass")}>
                                    <input type="hidden" name="tryAnotherWay" value="on" />
                                    <a
                                        href="#"
                                        id="try-another-way"
                                        onClick={() => {
                                            document.forms["kc-select-try-another-way-form" as never].requestSubmit();
                                            return false;
                                        }}
                                    >
                                        {msg("doTryAnotherWay")}
                                    </a>
                                </div>
                            </form>
                        )}
                        {socialProvidersNode}
                        {displayInfo && (
                            <div id="kc-info" className={kcClsx("kcSignUpClass")}>
                                <div id="kc-info-wrapper" className={kcClsx("kcInfoAreaWrapperClass")}>
                                    {infoNode}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
