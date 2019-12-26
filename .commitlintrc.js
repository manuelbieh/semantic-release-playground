module.exports = {
    extends: [
        '@commitlint/config-angular'
    ],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'feature',
                'fix',
                'bugfix',
                'hotfix',
                'improvement',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'release',
                'major',
                'minor',
                'patch',
            ]
        ]
    }
}
