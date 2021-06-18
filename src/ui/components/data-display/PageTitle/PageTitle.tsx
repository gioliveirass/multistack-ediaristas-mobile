import React from "react";
import {
  PageTitleStyled,
  PageSubtitleStyled,
  PageTitleContainer,
} from "./PageTitle.style";

export interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
};

const PageTitle: React.FC<PageTitleProps> = ({title, subtitle}) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{title}</PageTitleStyled>
            <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
        </PageTitleContainer>
    );
}

export default PageTitle;