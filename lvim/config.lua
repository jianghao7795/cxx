-- Read the docs: https://www.lunarvim.org/docs/configuration
-- Example configs: https://github.com/LunarVim/starter.lvim
-- Video Tutorials: https://www.youtube.com/watch?v=sFA9kX-Ud_c&list=PLhoH5vyxr6QqGu0i7tt_XoVK9v-KvZ3m6
-- Forum: https://www.reddit.com/r/lunarvim/
-- Discord: https://discord.com/invite/Xb9B4Ny
local formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup({
    { name = "gofumpt",   filetype = { "go" } },
    { name = "goimports", filetype = { "go" } },
    { name = "prettier",  filetype = { "javascipt", "javasciptreact", "typescript", "typescriptreact", "vue" } }
})
lvim.format_on_save.enabled = true
lvim.colorscheme = "lunarvim"
vim.opt.shiftwidth = 4
vim.opt.tabstop = 4
local lspconfig = require('lspconfig')
lspconfig.volar.setup {
    filetypes = { 'typescript', 'javascript', 'javascriptreact', 'typescriptreact', 'vue' },
    init_options = {
        vue = {
            hybridMode = false,
        },
    },
}

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
    {
        "norcalli/nvim-colorizer.lua",
        config = function()
            require("colorizer").setup({ "css", "scss", "html", "javascript", "less", "vue" }, {
                RGB = true,      -- #RGB hex codes
                RRGGBB = true,   -- #RRGGBB hex codes
                RRGGBBAA = true, -- #RRGGBBAA hex codes
                rgb_fn = true,   -- CSS rgb() and rgba() functions
                hsl_fn = true,   -- CSS hsl() and hsla() functions
                css = true,      -- Enable all CSS features: rgb_fn, hsl_fn, names, RGB, RRGGBB
                css_fn = true,   -- Enable all CSS *functions*: rgb_fn, hsl_fn
            })
        end,
    },
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
