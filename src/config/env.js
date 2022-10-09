export const ENV = {
  // base_url: 'https://api.permispop.fr/api',
  base_url: 'http://160.153.244.127:9090/api',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBYmMiLCJlbWFpbCI6IjFAZ21haWwuY29tIiwidXNlckRhdGEiOiJleUpwWkNJNklqWXhOamt4T1dFNVpHVm1aVEUyTVdNMlkyRmlPVEZtTnlJc0ltUjFjR3hwWTJGMFpWOXBaQ0k2SWpZeE5qa3hPV0U1WkdWbVpURTJNV00yWTJGaU9URm1OeUlzSW1acGNuTjBUbUZ0WlNJNklrRmlZeUlzSW5OMWNrNWhiV1VpT2lKVGRIVmtaVzUwSWl3aVpFOUNJam9pTWpBd01DMHdNUzB3TVZReE9Ub3dNRG93TUM0d01EQmFJaXdpY0d4aFkyVlBaa0pwY25Sb0lqb2lTMnB6Wm1ScmFtTmtiaUFpTENKblpXNWtaWElpT2lKTllXeGxJaXdpWm5KdmJuUkpSRkJvYjNSdklqb2lhSFIwY0RvdkwyeHZZMkZzYUc5emREbzJNelV6T1Z4Y1EzSmxaR1Z1ZEdsaGJFWnBiR1Z6WEZ3Mk1UWTVNVGxoT1dSbFptVXhOakZqTm1OaFlqa3haamRjWERZeE5qa3hPV0U1WkdWbVpURTJNV00yWTJGaU9URm1OMTltY205dWRFbEVMbXBtYVdZaUxDSmlZV05yU1VSUWFHOTBieUk2SW1oMGRIQTZMeTlzYjJOaGJHaHZjM1E2TmpNMU16bGNYRU55WldSbGJuUnBZV3hHYVd4bGMxeGNOakUyT1RFNVlUbGtaV1psTVRZeFl6WmpZV0k1TVdZM1hGdzJNVFk1TVRsaE9XUmxabVV4TmpGak5tTmhZamt4WmpkZlltRmphMGxFTG1wbWFXWWlMQ0poWkdSeVpYTnpJam9pdzRBZ1JNT3BabWx1YVhJZ0lpd2lZMjl0Y0d4bGJXVnVkQ0k2SWlJc0lucEpVQ0k2SWprM05EQXdJaXdpWTJsMGVTSTZJbE5oYVc1MExXUmxibWx6SWl3aWNHaHZkRzhpT2lJaUxDSndZWE56ZDI5eVpDSTZJazFVU1hwT1JGVXlUbnBuUFNJc0ltNUZVRWdpT2lJaUxDSnViMDltU0hKelYyRnVkR1ZrSWpvaUlpd2laVzFoYVd3aU9pSXhRR2R0WVdsc0xtTnZiU0lzSW5Cb2IyNWxJam9pTXpjeU9UY3pPVEk1TXlJc0luTmxZMjl1WkVWdFlXbHNJam9pSWl3aWMyVmpiMjVrVUdodmJtVWlPaUlpTENKb2FXZG9WMkY1UTI5a1pVUmhkR1VpT2lJaUxDSm9hV2RvVjJGNVEyOWtaVWx0WVdkbElqcHVkV3hzTENKc1lYUWlPaUl0TWpBdU9EazJPRFEySWl3aWJHOXVaeUk2SWpVMUxqUTVNelkyTnlJc0luSnZiR1VpT2lKVGRIVmtaVzUwSWl3aVpISnBkbWx1WjFOamFHOXZiRWxFSWpwdWRXeHNMQ0p5WldkcGMzUnlZWFJwYjI1RVlYUmxJam9pTVRVdk1UQXZNakF5TVNJc0ltUnZZM1Z0Wlc1MFZHVnpkR1ZrSWpvaVZHVnpkR1ZrSWl3aVkyOXVkR0ZqZEVWdFlXbHNJam9pTVVCbmJXRnBiQzVqYjIwaUxDSmpVRVpCWTJObGNIUWlPbTUxYkd3c0luZHZjbXRYYVhSb1QzUm9aWElpT201MWJHd3NJbWRwZG1WUGRYSlFiR0YwWm05eWJWUnBiV1VpT201MWJHd3NJbmRvYVdOb1VHeGhkR1p2Y20waU9tNTFiR3dzSW14aGMzUkJZM1JwZG1WVWFXMWxJam9pTWpBeU1TMHhNaTB6TVZRd09UbzFORG94TVM0d01qTTRNelUzS3pBMU9qQXdJaXdpYzNCdmEyVnVUR0Z1WjNWaFoyVWlPbHRkTENKd2NtOW1hV3hsU1c1bWJ5STZiblZzYkN3aVlXSnpaVzUwVTNSaGNuUkVZWFJsSWpwdWRXeHNMQ0poWW5ObGJuUkZibVJFWVhSbElqcHVkV3hzTENKbGJXRnBiRk5sYm5RaU9tNTFiR3dzSW1selQyNXNhVzVsSWpwMGNuVmxMQ0pzWVhOMFUyVmxiaUk2SWlJc0luQmhhV1FpT201MWJHd3NJbTF6WjAxaGFXeERiM1Z1ZENJNk1Dd2lhVzV6ZEhKMVkzUnZjazFsWlhSMWNGQnZhVzUwU1c1bWIzTWlPbTUxYkd4OSIsInJvbGUiOiJTdHVkZW50IiwiYXVkIjpbIioiLCJodHRwOi8vbG9jYWxob3N0OjYzNTM5LyJdLCJzZWNyZXRLZXkiOiJ0aGlzaXNzZWNyZXRrZXkiLCJqdGkiOiI1ZmQ3OTI3Ny00OWZjLTQ1OTUtYTRhMC1lNGIyMzZiYzRkMTgiLCJleHAiOjE2NDA5MzcyNTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjM1MzkvIn0.YAp7dd1XjNNSQ45gqxKhFJnEIo7Ux2_Fp9NHgFXYvkE',
  resourceURL: '',
};
