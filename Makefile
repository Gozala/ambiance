
package:
	rm -rf build
	mkdir build
	zip -r build/ambiance.nw * -x "plugins/*" -x "bulid/*" -x "*/.*"
	cp -r /Applications/node-webkit.app build/Ambiance.app
	cp resource/app.icns build/Ambiance.app/Contents/Resources/app.icns
	mv build/ambiance.nw build/Ambiance.app/Contents/Resources/app.nw
	ln -s /Applications build/Applications
	hdiutil create /tmp/tmp.dmg -ov -volname "Ambiance" -fs HFS+ -srcfolder "build/" 
	hdiutil convert /tmp/tmp.dmg -format UDZO -o build/Ambiance.dmg
