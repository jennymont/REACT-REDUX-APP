import { TableContainer, TableContent, EmptyList, IconButton } from './table.styles';
import { StarIcon, EyeIcon } from "lucide-react"
import ContentLoader from 'react-content-loader';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
interface TableProps {
  columns: Array<{ accessor: string; header: string }>;
  data: Array<{ [key: string]: any }>;
  handleFavorite: (id: number) => void;
  favorites: number[];
  isLoading: Boolean;
}


  
export default function Table({ columns, data, handleFavorite, favorites, isLoading }: TableProps) {
    const navigate = useNavigate();

    if(isLoading) {
        return <Loading />
    }

    if(data.length === 0) {
        return <EmptyList>{'Nenhum usuário encontrado'}</EmptyList>
    }

    return (
        <TableContainer>
            <TableContent>
                <thead>
                <tr>
                    {columns.map((col, index) => (
                    <th key={index}>{col.header}</th>
                    ))}
                    <th>Visualizar</th>
                    <th>Favoritar</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                    {columns.map((col, idx) => (
                        <td key={idx}>{row[col.accessor]}</td>
                    ))}
                    <td>
                        <IconButton onClick={() => navigate(routes.USER(row.id))}>
                            <EyeIcon color='#59575b' />
                        </IconButton>
                    </td>
                    <td>
                        <IconButton onClick={() => handleFavorite(row.id)}>
                            <StarIcon 
                              fill={favorites.includes(row.id) ? "#E77231" : "transparent"} 
                              stroke={favorites.includes(row.id) ? "#E77231" : "#59575b"}
                            />
                        </IconButton>                    
                    </td>
                    </tr>
                ))}
                </tbody>
            </TableContent>
        </TableContainer>
  );
};

const Loading = () => {
    return (
        <ContentLoader
            speed={2}
            width={'100%'}
            height='600px'
            backgroundColor={'#e6e6e6'}
            foregroundColor={'#d8d8d8'}
        >
            <rect x='0' y='20' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='80' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='140' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='200' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='260' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='320' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='380' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='440' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='500' rx='5' ry='5' width='100%' height='40px' />
            <rect x='0' y='560' rx='5' ry='5' width='100%' height='40px' />
        </ContentLoader>
    );
};
