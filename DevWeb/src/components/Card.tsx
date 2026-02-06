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
            <div className="h-50 bg-no-repeat bg-cover bg-position-[50%]" style={{ backgroundImage: `url('${banner}')` }}></div>
            <div className="pt-4 pb-10 pl-6 pr-6">
                <h3 className='font-bold text-2xl m-0 line-clamp-1 text-ellipsis overflow-hidden'>{title}</h3>
                {date && <h4 className="text-[rgba(238,240,244,0.64)] text-[0.875rem] leading-5 pt-[0.3rem] pb-[0.7rem] font-light m-0">{date}</h4>}
                <h4 className="font-normal italic line-clamp-3 text-ellipsis overflow-hidden">{summary}</h4>
            </div>
        </>
    );

    return (
        <div className="bg-[#151719] color-[#e8eef2] border-[#383d42] border-solid border rounded-[3px] hover:bg-[#1a1f22] h-94">
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