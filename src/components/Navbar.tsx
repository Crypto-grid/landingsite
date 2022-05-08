export default function NavComponent() {
	return (
		<>
			<div className="navbar bg-base lg">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl" href="#home">
						Crypto Grid
						<img src="" className="nav--logo" />
					</a>
				</div>
				<div className="navbar-end">
					<ul className="menu menu-horizontal p-0">
						<li>
							<a href="#home">Guides</a>
						</li>
						<li>
							<a href="#link">Guides</a>
						</li>
						<li>
							<a href="#link">Governance</a>
						</li>
						<li>
							<a href="#link">Community</a>
						</li>
						<li>
							<a href="#link">Blog</a>
						</li>
					</ul>
					<a className="btn">Get started</a>
				</div>
			</div>
			{/* <nav>
            
        </nav> */}
		</>
	);
}
