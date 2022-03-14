import { Offers } from '../../types/offers';

import PlaceCard from '../place-card';

type OffersListProps = {
    offers: Offers,
    setActiveOffer: (id : number | null) => void;
}

function OffersList(props : OffersListProps): JSX.Element {
  const handleMouseOver = ( id: number ) => {
    props.setActiveOffer(id);
  };
  const { offers } = props;
  return (
    <>
      {offers.map((item) => (
        <PlaceCard
          key={item.id}
          offer={item}
          mouseOverHandler={() => handleMouseOver(item.id)}
        />))}

    </>
  );
}

export default OffersList;
