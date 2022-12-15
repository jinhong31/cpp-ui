export const getApplicantsContent = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_GRAPHQL || '';
  const apiKey = process.env.NEXT_PUBLIC_GRAPHQL_APIKEY || '';
  const graphQLMutation = JSON.stringify({
    mutation: `{
      portalId: 6
    }`
  });
  await fetch(apiUrl.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
    graphQLMutation  });
};


mutation MyMutation {
  createApplicant(applicant: {applicationState: "created", portalId: "777"}) {
    type
    applicationState
    firstName
    middleName
    lastName
    primaryApplicant
    phone
    email
    activeMilitary
    birthDate
    applicantState
    inviteAccepted
    inviteSent
    termsAcceptedOn
    termsVersion
    createdOn
    createdBy
    updatedOn
    updatedBy
  }
}
