module.exports = {
    branch: 'master',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    { breaking: true, release: 'major' },
                    { revert: true, release: 'patch' },
                    // MAJOR
                    // { type: 'major', release: 'major' },
                    // { type: 'breaking', release: 'major' },
                    // MINOR
                    // { type: 'minor', release: 'minor' },
                    { type: 'feat', release: 'minor' },
                    { type: 'feature', release: 'minor' },
                    // PATCH
                    // { type: 'patch', release: 'patch' },
                    { type: 'fix', release: 'patch' },
                    { type: 'bugfix', release: 'patch' },
                    { type: 'hotfix', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'improvement', release: 'patch' },
                    { type: 'revert', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'docs', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'test', release: 'patch' },
                    // NO RELEASE
                    { scope: 'no-release', release: false },
                ],
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                // using conventionalcommits here since the angular preset does not allow custom
                // types for release notes generation.
                preset: 'conventionalcommits',
                presetConfig: {
                    types: [
                        // { type: 'major', section: 'Breaking' },
                        // { type: 'breaking', section: 'Breaking' },
                        { type: 'feat', section: '🧩 Features' },
                        { type: 'feature', section: '🧩 Features' },
                        { type: 'fix', section: '🔧 Fixes' },
                        { type: 'bugfix', section: '🔧 Fixes' },
                        { type: 'hotfix', section: '🔧 Fixes' },
                        { type: 'chore', section: '💉 Improvements' },
                        { type: 'perf', section: '💉 Improvements' },
                        { type: 'refactor', section: '💉 Improvements' },
                        { type: 'improvement', section: '💉 Improvements' },
                        { type: 'style', section: '💉 Improvements' },
                        { type: 'docs', section: '📚 Docs' },
                    ],
                },
            },
        ],
        // '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git',
    ],
    verifyConditions: [
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git',
    ],
    prepare: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        {
            path: '@semantic-release/git',
            message:
                'release: <%= nextRelease.version %> - <%= new Date().toISOString() %> [skip ci]\n\n<%= nextRelease.notes %>',
        },
    ],
};
