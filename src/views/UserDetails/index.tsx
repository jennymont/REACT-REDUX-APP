import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserByID, RootState, UserData } from '../../store/reducers/user.reducers';
import { matchPath } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { Content, Header, HeaderTitle, IconButton, Title, UserCard, UserDetail } from './userDetails.styles';
import Container from '../../components/Container';
import { ArrowLeftFromLine } from 'lucide-react';
import ContentLoader from 'react-content-loader';
import { Tooltip } from 'react-tooltip'

interface Props {
    dispatch: Function;
    user: UserData;
    loading: Boolean
}

class UserDetails extends Component<Props> {

    componentDidMount() {
        const {dispatch} = this.props;
        const url = window.location.pathname
        const match = matchPath(routes.USER(), url);

        if (match) {
          const userId = match.params.userId;
  
          if (userId) {
              dispatch(fetchUserByID(userId));
          }
      }
    }

    render() {
      const { user, loading } = this.props; 

      if (loading) {
        return <Loading />
      }

      if (!user) {
        return null;
    }

    const contactDetails = [
      { label: 'Nome', value: user.name },
      { label: 'Username', value: user.username },
      { label: 'Email', value: user.email },
      { label: 'Telefone', value: user.phone },
      { label: 'Website', value: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a> },
    ];

    const addressDetails = [
        { label: 'Rua', value: user.address.street },
        { label: 'Apartamento', value: user.address.suite },
        { label: 'Cidade', value: user.address.city },
        { label: 'CEP', value: user.address.zipcode },
    ];

    const companyDetails = [
        { label: 'Nome', value: user.company.name },
        { label: 'Slogan', value: user.company.catchPhrase },
        { label: 'Função', value: user.company.bs },
    ];

    const renderDetails = (details: { label: string; value: React.ReactNode }[]) =>
        details.map((detail, index) => (
            <UserDetail key={index}>
                <strong>{detail.label}:</strong> {detail.value}
            </UserDetail>
        ));

        return (
          <Container>
            <Header>
              <IconButton 
                onClick={() => window.location.href = '/'}  
                data-tooltip-id='toBack' 
                data-tooltip-content='Voltar'
              >
                <ArrowLeftFromLine color='#E77231'/>    
              </IconButton>
              <HeaderTitle>{'Detalhes do usuário'}</HeaderTitle>
              <Tooltip id='toBack' variant='info'/>
            </Header>

            <UserCard>
              <Title>Informações de contato</Title>
              <Content>{renderDetails(contactDetails)}</Content>

              <Title>Endereço</Title>
              <Content>{renderDetails(addressDetails)}</Content>

              <Title>Empresa</Title>
              <Content>{renderDetails(companyDetails)}</Content>
            </UserCard>
          </Container>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
  user: state.User.userDetails,
  loading: state.User.loading,
});

export default connect(mapStateToProps)(UserDetails);

const Loading = () => {
  return (
      <ContentLoader
          speed={2}
          width={'100%'}
          height='900px'
          backgroundColor={'#e6e6e6'}
          foregroundColor={'#d8d8d8'}
      >
          <rect x='20' y='40' rx='5' ry='5' width='40px' height='50px' />
          <rect x='80' y='40' rx='5' ry='5' width='40%' height='50px' />
          <rect x='20' y='140' rx='5' ry='5' width='97%' height='700px' />
      </ContentLoader>
  );
};
