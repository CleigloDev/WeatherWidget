import { useMatchMedia } from '../../../modules/useMatchMedia';

export default function DynamicComponent(props) {

    const isMobileLike = useMatchMedia(props.mediaQuery, false);

    const render = () => {
        return (
            <div>
                {!isMobileLike && props.children}
            </div>
        );
    }

  return render();
};