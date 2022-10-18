import styles from "../url/Url.module.css";
import SVG from "react-inlinesvg";
import iconButton from "assets/arrow-button.svg";
import copyButton from "assets/copy-button.svg";
import React from "react";

export const Url = ({ url, body }: any) => {
    const copyToClipboard = (e: any) => {
        navigator.clipboard.writeText(`https://jsonurl.com/${url}`);
        if (e.type === "keydown") return;
        e.preventDefault();
    };

    return (
        <a
            href={`https://jsonurl.com/${url}`}
            target="_blank"
            rel="noreferrer"
            className={styles.url}
        >
            <div className={styles.urlHeading}>
                <p className={styles.urlUrl}>jsonurl.com/{url}</p>
                <div className={styles.rightSide}>
                    <SVG
                        tabIndex={0}
                        onClick={copyToClipboard}
                        onKeyDown={copyToClipboard}
                        className={styles.copyButton}
                        src={copyButton.src}
                    />
                    <SVG className={styles.arrowButton} src={iconButton.src} />
                </div>
            </div>
            <p className={styles.urlBody}>{body}</p>
        </a>
    );
};