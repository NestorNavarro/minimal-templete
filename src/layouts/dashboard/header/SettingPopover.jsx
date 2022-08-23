import { useState } from "react";
// @mui
import { Badge, Divider, Typography, Stack } from "@mui/material";
// components
import Iconify               from "core/Iconify";
import MenuPopover           from "core/MenuPopover";
import { IconButtonAnimate } from "core/animate";
// core
import Scrollbar           from "core/Scrollbar";
import SettingMode         from "core/settings/SettingMode";
import SettingLayout       from "core/settings/SettingLayout";
import SettingFullscreen   from "core/settings/SettingFullscreen";
import SettingColorPresets from "core/settings/SettingColorPresets";
// hooks
import useSettings from "hooks/useSettings";
// ----------------------------------------------------------------------

export default function SettingPopover() {
	const [open, setOpen] = useState(null);

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => setOpen(null);

	return (
		<>
			<IconButtonAnimate color={open ? "primary" : "default"} onClick={handleOpen} sx={{ width : 40, height : 40 }}>
				<Badge color="error">
					<Iconify icon="eva:options-2-fill" width={20} height={20} />
				</Badge>
			</IconButtonAnimate>

			<MenuPopover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				sx={{ width : 360, p : 0, mt : 1.5, ml : 0.75 }}
			>
				<Content OnClose={handleClose} />
			</MenuPopover>
		</>
	);
}

const Content = ({ OnClose }) => {
	const { onResetSetting } = useSettings();

	return (
		<>
			<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py : 2, pr : 1, pl : 2.5 }}>
				<Typography variant="subtitle1">Configuraciones</Typography>
				<div>
					<IconButtonAnimate onClick={onResetSetting}>
						<Iconify icon={"ic:round-refresh"} width={20} height={20} />
					</IconButtonAnimate>
					<IconButtonAnimate onClick={OnClose}>
						<Iconify icon={"eva:close-fill"} width={20} height={20} />
					</IconButtonAnimate>
				</div>
			</Stack>

			<Divider sx={{ borderStyle : "dashed" }} />

			<Scrollbar sx={{ flexGrow : 1 }}>
				<Stack spacing={3} sx={{ p : 3 }}>
					<Stack spacing={1.5}>
						<Typography variant="subtitle2">Tema</Typography>
						<SettingMode />
					</Stack>
					<Stack spacing={1.5}>
						<Typography variant="subtitle2">Diseño</Typography>
						<SettingLayout />
					</Stack>

					<Stack spacing={1.5}>
						<Typography variant="subtitle2">Color</Typography>
						<SettingColorPresets />
					</Stack>
					<SettingFullscreen />
				</Stack>
			</Scrollbar>
		</>
	);
};
