import Link from 'next/link';

export default function NextBtn({to}:any) {
    return <>
    <Link href={to}>
          <a className="next-button">{`Next >`}</a>
    </Link>
    <style jsx>{`
        .next-button {
            margin: 16px calc(17.5vw - 16px);
            width: 65vw;
            height: 44px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(0deg, rgba(130, 102, 139, 0.11), rgba(130, 102, 139, 0.11)), #EFDCF6;
            box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
            border-radius: 16px;
            font-family: 'Roboto Medium', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
        }
    `}</style>
    </>
}