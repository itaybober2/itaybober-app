
type BaseScreenProps = {
    title: string;
    subtitle: string;
    type: 'hello' | 'sign in' | 'thank you' | 'log in';
}
const BaseScreen = () => {
    return (
        <div>
            <h1>BaseScreen</h1>
        </div>
    )
}

export default BaseScreen;