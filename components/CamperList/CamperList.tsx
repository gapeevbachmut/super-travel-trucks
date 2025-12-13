import { Camper } from '@/types/camper';
import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';

type Props = {
  campers: Camper[];
  total: number;
  loading: boolean;
  onLoadMore: () => void;
};
const CamperList = ({ campers, total, loading, onLoadMore }: Props) => {
  return (
    <div className={css.container}>
      <ul className={css.camperList}>
        {campers.map(camper => (
          <CamperItem key={camper.id} camper={camper} />
        ))}
      </ul>
      {campers.length < total && (
        <button
          onClick={onLoadMore}
          disabled={loading}
          className={css.btnLoadMore}
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};
export default CamperList;
