-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Example configs: https://github.com/LunarVim/starter.lvim
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Forum: https://www.reddit.com/r/lunarvim/
-- Discord: https://discord.com/invite/Xb9B4Ny
local formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup({
    { name = "gofumpt",   filetype = { "go" } },
    { name = "goimports", filetype = { "go" } },
    { name = "prettier",  filetype = { "javascipt", "javasciptreact", "typescript", "typescriptreact", "vue", "proto", "json" } }
})
lvim.format_on_save.enabled = true
lvim.colorscheme = "onedark"
-- lvim.builtin.lualine.options.theme = "auto"
lvim.builtin.treesitter.highlight.enable = true  -- 启用精准语法高亮
-- lvim.lsp.installer.setup.ensure_installed = { "volar" }
-- lvim.lsp.automatic_configuration.skipped_servers = { "volar" } -- 防止与其他 LSP 冲突
-- lvim.builtin.treesitter.ensure_installed = { "vue" }
-- lvim.colorscheme = "slate"
vim.opt.updatetime = 200
vim.g.coc_global_extensions = { 'coc-nvim' }
vim.opt.shiftwidth = 4
vim.opt.tabstop = 4
vim.keymap.set("i", "<C-y>", function()
    require("copilot").accept()
end)
local lspconfig = require('lspconfig')
lspconfig.volar.setup {
    filetypes = { 'vue' },
    init_options = {
        vue = {
            hybridMode = false,
        },
    },
}

-- lvim.builtin.nvimtree.setup = {
--     view = {
--         width = 30,        -- 直接指定宽度（数值越大窗口越宽）
--         adaptive_size = false, -- 关闭自适应宽度（否则会根据内容动态调整）
--     },
-- }
-- local nvim_lsp = require('lspconfig')
-- lspconfig.denols.setup {
--     -- on_attach = on_attach,
--     root_dir = lspconfig.util.root_pattern("deno.json", "deno.jsonc"),
-- }

-- lspconfig.ts_ls.setup {
--     -- on_attach = on_attach,
--     root_dir = lspconfig.util.root_pattern("package.json"),
--     single_file_support = false
-- }

-- local lsp_zero = require("lsp-zero")
-- local lspconfig = require("lspconfig")

-- lsp_zero.on_attach(function(client, bufnr)
--   -- see :help lsp-zero-keybindings
--   -- to learn the available actions
--   lsp_zero.default_keymaps({buffer = bufnr})
-- end)
-- require('mason-lspconfig').setup({
--   ensure_installed = { 'volar', 'tsserver' },
--   handlers = {
--     -- lsp_zero.default_setup,
--     volar = function()
--       require("lspconfig").volar.setup({
--         filetypes = { 'typescript', 'javascript', 'javascriptreact', 'typescriptreact', 'vue', 'json' },
--         init_options = {
--           typescript = {
--             tsdk =
--             'C:/Users/User/AppData/Local/nvim-data/mason/packages/typescript-language-server/node_modules/typescript/lib'
--           }
--         }
--       })
--     end
--   },
-- })

lvim.plugins = {
    {
        "rmagatti/goto-preview",
        -- lazy = true,
        config = function()
            require('goto-preview').setup {
                width = 120,             -- Width of the floating window
                height = 25,             -- Height of the floating window
                default_mappings = true, -- Bind default mappings
                debug = false,           -- Print debug information
                opacity = nil,           -- 0-100 opacity level of the floating window where 100 is fully transparent.
                post_open_hook = nil,    -- A function taking two arguments, a buffer and a window to be ran as a hook.
                -- You can use "default_mappings = true" setup option
                -- Or explicitly set keybindings
                vim.cmd("nnoremap gpd <cmd>lua require('goto-preview').goto_preview_definition()<CR>"),
                vim.cmd("nnoremap gpi <cmd>lua require('goto-preview').goto_preview_implementation()<CR>"),
                vim.cmd("nnoremap gP <cmd>lua require('goto-preview').close_all_win()<CR>")
            }
        end
    },
    -- {
    --     "norcalli/nvim-colorizer.lua",
    --     config = function()
    --         require("colorizer").setup({ "css", "scss", "html", "javascript", "less", "vue", "go", "rust" }, {
    --             RGB = true,      -- #RGB hex codes
    --             RRGGBB = true,   -- #RRGGBB hex codes
    --             RRGGBBAA = true, -- #RRGGBBAA hex codes
    --             rgb_fn = true,   -- CSS rgb() and rgba() functions
    --             hsl_fn = true,   -- CSS hsl() and hsla() functions
    --             css = true,      -- Enable all CSS features: rgb_fn, hsl_fn, names, RGB, RRGGBB
    --             css_fn = true,   -- Enable all CSS *functions*: rgb_fn, hsl_fn
    --         })
    --     end,
    -- },
    {
        "luozhiya/fittencode.nvim",
        config = function()
            require("fittencode").setup({})
        end
    },
    -- 在 ~/.config/lvim/config.lua 的 plugins 部分添加
    {
        "lewis6991/gitsigns.nvim",
        event = "BufRead",
        config = function()
            require("gitsigns").setup({
                signs = {
                    add = { text = "│" },
                    delete = { text = "_" },
                    change = { text = "│" },
                },
                current_line_blame = true, -- 启用行级 Blame
                current_line_blame_opts = {
                    virt_text_pos = "eol", -- Blame 信息对齐右侧
                    delay = 400,           -- 延迟显示
                },
            })
        end
    },
    -- {
    --     "github/copilot.vim",
    --     event = "InsertEnter",
    --     config = function()
    --         require("copilot").setup({
    --             -- 你的 Copilot 配置
    --             enabled = true,
    --             auto_accept = false,
    --             delay = 500,
    --             max_length = 120,
    --             indicator = {
    --                 enabled = true,
    --                 text = "Copilot",
    --             },
    --         })
    --     end,
    -- }, -- {
    --     "zbirenbaum/copilot-cmp",
    --     event = "InsertEnter",
    --     dependencies = { "zbirenbaum/copilot.lua" },
    --     config = function()
    --         vim.defer_fn(function()
    --             require("copilot").setup()     -- https://github.com/zbirenbaum/copilot.lua/blob/master/README.md#setup-and-configuration
    --             require("copilot_cmp").setup() -- https://github.com/zbirenbaum/copilot-cmp/blob/master/README.md#configuration
    --         end, 100)
    --     end,
    -- }
    -- {
    --     "3rd/image.nvim"
    -- },
    -- {
    --     'neoclide/coc.nvim',
    -- },
    { "folke/tokyonight.nvim" },       -- 安装东京之夜主题
    { "rebelot/kanagawa.nvim" },       -- 安装金川水墨风主题
    { "navarasu/onedark.nvim" },       -- 安装 OneDark 主题
}

-- lvim.builtin.treesitter.ensure_installed = { --这是已有的, 修改为你需要的语言即可
--   "bash",
--   "vim",
--   "lua",
--   "c",
--   "cpp",
--   "cmake",
--   "go",
--   "python",
--   "javascript",
--   "typescript",
--   "tsx",
--   "html",
--   "css",
--   "markdown",
--   "json",
--   "yaml",
--   "vue",
--   "json",
--   "markdown",
--   "rust",
--   "jsx"
-- }
