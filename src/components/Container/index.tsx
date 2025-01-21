import { Main } from './container.styles';

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <Main>
            {children}
        </Main>
    );
}
