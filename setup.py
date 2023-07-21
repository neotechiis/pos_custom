from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in pos_custom/__init__.py
from pos_custom import __version__ as version

setup(
	name="pos_custom",
	version=version,
	description="Posawesome Customizations",
	author="Kishan Panchal",
	author_email="k.d.panchalofc@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
