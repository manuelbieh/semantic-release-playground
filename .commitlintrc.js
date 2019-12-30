module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        // experiment with the max length a bitz
        'header-max-length': [2, 'always', 100],
        'type-enum': [
            2,
            'always',
            [
                'major',
                'breaking',
                'minor',
                'feat',
                'feature',
                'patch',
                'fix',
                'bugfix',
                'hotfix',
                'perf',
                'docs',
                'refactor',
                'improvement',
                'chore',
                'revert',
                'ci',
                'style',
                'test',
                'release',
                'build',
            ],
        ],
    },
};
