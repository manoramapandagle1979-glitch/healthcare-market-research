interface StyledReportContentProps {
  htmlContent: string;
  reportSlug?: string;
}

export const StyledReportContent: React.FC<StyledReportContentProps> = ({
  htmlContent,
}) => {
  return (
    <div
      className="prose prose-lg max-w-none text-[#333333] styled-report-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};
