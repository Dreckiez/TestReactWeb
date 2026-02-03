import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  date?: string; // The '?' means this is optional (Projects don't have dates)
  banner: string;
  summary: string;
  link: string;
  isExternal: boolean;
}

const Card = ({ title, date, banner, summary, link, isExternal }: CardProps) => {
    const CardContent = (
        <>
            <div className="banner" style={{ backgroundImage: `url('${banner}')` }}></div>
            <div className="content">
                <h3>{title.length > 20 && !isExternal ? title.slice(0,20) + '...' : title}</h3>
                {date && <h4 className="date">{date}</h4>}
                <h4 className="summary">{summary.slice(0, 100)}...</h4>
            </div>
        </>
    );

    return (
        <div className="card">
            {isExternal ? (
                <a href={link} target="_blank" rel="noreferrer">
                    {CardContent}
                </a>
            ) : (
                <Link to={link}>
                    {CardContent}
                </Link>
            )}
        </div>
    );
};

export default Card;