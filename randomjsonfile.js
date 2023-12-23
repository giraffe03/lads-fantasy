// query one{
    // league(id: 15862){
    //   matchesGroupBy(request: {playerList: ALL, groupBy: TEAM, take: 31, skip: 0}){
    //     ... on MatchGroupByTeamType{
    //       team{
    //         name
    //         winCount
    //         lossCount
    //         members(skip:0, take: 15){
    //           steamAccount{
    //             name
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
//   }
  
//   query three{
//     player(steamAccountId: 303331256){
//       matches(request: {leagueId: 15862}){
//         id
//       }
      
//   }
  
//   query two{
//     league(id: 15862){
//       matchesGroupBy(request: {playerList: ALL, groupBy: STEAM_ACCOUNT_ID, take: 1000, skip:0}){
//         ... on MatchGroupBySteamAccountIdType{
//           steamAccount{
//             id
//             name
//           }
//         }
//       }
//     }
//   }