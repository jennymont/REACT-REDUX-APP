import { useEffect, useMemo, useState } from 'react';
import Table from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, RootState, toggleFavorite } from '../../store/reducers/user.reducers';
import { FilterButton, Filters, HeaderTitle, Search } from './users.styles';
import { Filter } from "lucide-react"
import Container from '../../components/Container';
import { useViewport } from '../../hooks/useViewport';

interface Column {
    accessor: string;
    header: string;   
  }

const columns: Column[] = [
    { accessor: 'name', header: 'Nome' },
    { accessor: 'email', header: 'E-mail' },
    { accessor: 'phone', header: 'Telefone' },
];

export default function Users() {
  const [search, setSearch] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const {isMobile} = useViewport();
  const displayColumns = isMobile ? columns.slice(0, 1) : columns;

  const usersData = useSelector((state: RootState) => state.User.usersList);
  const favorites = useSelector((state: RootState) => state.User.favorites);
  const isLoading = useSelector((state: RootState) => state.User.loading);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredUsers = useMemo(() => {
    return usersData.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
      const isFavorite = favorites.includes(user.id);

      return showFavorites ? isFavorite && matchesSearch : matchesSearch;
    });
  }, [usersData, favorites, search, showFavorites])

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUsers());

  }, [dispatch]);

  const handleFavorite = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const handleToggleFavorites = () => {
    setShowFavorites(prev => !prev);
  };

  return (
    <Container>
      <HeaderTitle>{'Usuários'}</HeaderTitle>
      <Filters>
        <Search
          placeholder="Pesquise por nome"
          autoComplete="off"
          type="text"
          name="text"
          onChange={handleSearchChange}
        />
        <FilterButton onClick={handleToggleFavorites}>
          <Filter />
          {showFavorites ? "Mostrar Todos" : "Filtrar Favoritos"}
        </FilterButton>
      </Filters>
      <Table
        columns={displayColumns}
        data={filteredUsers}
        handleFavorite={handleFavorite}
        favorites={favorites}
        isLoading={isLoading}
      />
    </Container>
  );
}
