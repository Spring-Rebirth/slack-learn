export interface AuthCardProps {
    setCard: (value: 'signIn' | 'signUp') => void;
}
export type flow = 'signIn' | 'signUp';