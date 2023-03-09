import { gql, useQuery } from '@apollo/client';

const TODAYS_SOBDO_CHHO = gql`
query {
	todayssobdoChook{
        _id
        sobdochhokcellType
        sobdochhokcellNumber
        sobdochhokcellData
	}
}
`;

export const getTodaysSobdoChhokDataToPublished = () => {
    const { loading, error,  data } = useQuery(TODAYS_SOBDO_CHHO);
    if( !error && !loading ) {
        return data.todayssobdoChook;
    }
    return [];
}