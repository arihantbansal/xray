export default async (address:string):Promise<any> => {
    const response = await fetch(`/api/solana/${address}/transactions`);

    const { data }  = await response.json();
        
    return data;
};
