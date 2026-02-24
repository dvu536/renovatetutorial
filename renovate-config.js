module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  requireConfig: "ignored",
  platform: 'github',
  forkProcessing: 'enabled',
  dryRun: null, // Beachte: Bei 'full' werden keine PRs erstellt, nur Logs geschrieben!
  repositories: ['dvu536/renovatetutorial'],
  extends: [
    'config:recommended'
  ],

  // 2. Optional: Explizit alle Manager erlauben (falls du einschränken wolltest)
  // Wenn weggelassen, sind standardmäßig alle aktiv.
  enabledManagers: null, 

  packageRules: [
   {
      description: 'Standard Updates ohne Approval (Patch, Digest, etc.)',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch', // Nur Bugfixes gehen direkt durch
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      minimumReleaseAge: null,
    },
    {
      description: 'Updates, die ein manuelles Häkchen im Dashboard brauchen',
      matchUpdateTypes: [
        'minor',
        'major', 
      ],
      dependencyDashboardApproval: true 
    },
  ],
};
